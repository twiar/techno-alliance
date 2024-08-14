import Header from "../components/Header/Header";
import React, {useEffect, useState} from "react";
import Footer from "../components/Footer/Footer";
import { Link, useParams, Outlet } from "react-router-dom";
import {collection, getDocs, doc, query, where} from "firebase/firestore";
import {db} from "../firebase";

export default function Section() {
  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);
  const outerParams = useParams();

  const getSection = async () => {
    const collections = collection(db, 'sections');
    const q = query(collections, where('path', '==', outerParams?.sectionId));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return list[0];
  };

  const getCategories = async () => {
    const snapshot = await getDocs(query(collection(db, "categories"), where("parentId", "==", item?.id)));
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return list;
  };

  useEffect(() => {
    const fetchItem = async () => {
      const section = await getSection();
      setItem(section);
    };
    fetchItem();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const cat = await getCategories();
      if (cat[0]?.order) cat.sort((a, b) => {
        if (a.order < b.order) {
          return -1;
        }
        if (a.order > b.order) {
          return 1;
        }
        return 0;
      });
      setCategories(cat);
    };
    fetchCategories();
  }, [item]);

  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-16 md:h-40"></div>

      <section className="h-96 md:h-full-64 bg-primary flex justify-center items-end">
        {item && (
          <>
            <div className="text-center mb-4 md:mb-16 relative z-20 text-white w-full md:w-1/2">
              <h2 className="text-2xl md:text-5xl mb-4 md:mb-8 font-bold text-white">{item?.title}</h2>

              <div className="flex flex-col gap-1 md:gap-2">{item?.description}</div>
            </div>
            {item?.images && (<div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"
               style={{ backgroundImage: `url(${item?.images ? item?.images[0] : ''})` }}
            ></div>)}
            <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
          </>
        )}
      </section>
      <section className="bg-primary flex justify-center py-10">
        <div className="flex justify-center flex-col">
            <h2 className="text-black text-2xl md:text-5xl font-bold text-center mb-12">Категории</h2>

            <div className="flex flex-col gap-8 mb-10">
              <div className="flex gap-8 flex-col md:flex-row flex-wrap max-w-[1000px] items-center justify-center">
                {categories?.map((category) => (
                  <Link to={`/sections/${item?.path}/categories/${category?.path}`} className="block md:h-96 md:w-96 bg-white relative group/item overflow-hidden">
                    <img alt={category?.title} src={category?.images ? category?.images[0] : ''} className="object-cover w-full h-64 md:h-96 transition duration-500 group-hover/item:scale-105" />
                    <p className="absolute w-full bottom-0 left-0 h-12 md:h-16 bg-white flex justify-center items-center">
                      <span className="text-base md:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">{category?.title}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
        </div>
      </section>
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}