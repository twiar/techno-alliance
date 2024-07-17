import SubmitForm from "../SubmitForm/SubmitForm";

export default function Footer() {
  return (
    <>
      <section className="bg-gray-100 flex justify-center py-10">
        <div className="flex justify-center flex-col px-8 md:px-0 w-full md:w-1/2 my-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-8 text-center">Отправить запрос</h2>
          <SubmitForm />
        </div>
      </section>
      <footer className="h-16 flex justify-center items-center">
        <p>© «ТЕХНОАЛЬЯНС»</p>
      </footer>
    </>
  );
}