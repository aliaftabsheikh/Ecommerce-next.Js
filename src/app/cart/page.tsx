import CartItems from "@/components/CartItems/page";

const Cart = () => {

  return (
    <>
      <main className="flex justify-center mt-12 ">
        <section className="w-[1160px] px-12 md:px-4 sm:px-2 py-4 ">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <CartItems />
        </section>
      </main>
    </>
  );
};

export default Cart;
