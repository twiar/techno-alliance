import { Outlet, Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Header from '../components/Header/Header';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function Root() {
  const [items, setItems] = useState([]);

  const getSections = async () => {
    const collections = collection(db, 'sections');
    const q = query(collections, orderBy('timestamp', 'asc'));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return list;
  };

  useEffect(() => {
    const fetchItems = async () => {
      const list = await getSections();
      if (list[0]?.order) list.sort((a, b) => {
        if (a.order < b.order) {
          return -1;
        }
        if (a.order > b.order) {
          return 1;
        }
        return 0;
      });
      setItems(list);
    };
    fetchItems();
  }, []);


  return (
    <div className="h-dvh lg:h-auto">
      <Header isMainPage />
      <div className="w-full h-16 lg:h-0"></div>

      <div className="h-full-16 lg:h-dvh flex flex-column lg:flex-row flex-wrap lg:flex-nowrap overflow-hidden">
        {items?.map((item) => (
          <Link key={item.id} to={`/sections/${item.path}`} className="group/item w-full lg:w-1/3 xl:w-1/3 bg-cover bg-center bg-no-repeat h-1/3 lg:h-full relative overflow-hidden">
            <div className="absolute top-0 h-full flex flex-col justify-end z-20 pointer-events-none transition duration-500 group-hover/item:-translate-y-1">
              <h2 className="[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)] text-base lg:text-3xl text-white p-4 w-4/5 font-bold">{item.title}</h2>
            </div>
            <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 lg:opacity-90 group-hover/item:opacity-50"  style={{ backgroundImage: `url(${item.images ? item.images[0] : ''})` }}></div>
            <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
          </Link>
        ))}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}