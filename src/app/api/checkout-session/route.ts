import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

interface typeofData {
  price: string;
  name: string;
  quantity: number;
}

let orignalData: typeofData[] = [
  {
    price: "price_1NPbWDCuKrNYoYJBHUuE0DeS",
    name: "Cameryn Sash Tie Dress",
    quantity: 1,
  },
  {
    price: "price_1NPbYyCuKrNYoYJBjhrtF0mN",
    name: "Pink Fleece Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NPez9CuKrNYoYJB6gv7VvGA",
    name: "Imperial Alpaca Hoodie",
    quantity: 1,
  },
  {
    price: "price_1NPezuCuKrNYoYJB4RNUA6hs",
    name: "Lite Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NPf4CCuKrNYoYJBndUymJxr",
    name: "Raglan Sweatshirt",
    quantity: 1,
  },
  {
    price: "price_1NPf6JCuKrNYoYJBl8fC97ah",
    name: "Flex Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NPf8MCuKrNYoYJB3tVfccgV",
    name: "Flex Push Button Bomber",
    quantity: 1,
  },
  {
    price: "price_1NPfBBCuKrNYoYJBn4T0RoY6",
    name: "Brushed Raglan Sweatshirt",
    quantity: 1,
  },
  {
    price: "price_1NPg50CuKrNYoYJBcc1ObivW",
    name: "Brushed Bomber",
    quantity: 1,
  },
  {
    price: "price_1NPg8UCuKrNYoYJBEbADNkhV",
    name: "Muscle Tank",
    quantity: 1,
  },
  {
    price: "price_1NPgBGCuKrNYoYJBvYSdpOF",
    name: "Flex Sweatshirt",
    quantity: 1,
  },
];

//@ts-ignore 
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  let cartItemsArray = await req.json();

  try {
    console.log(cartItemsArray);

    let line_item = orignalData.filter((item: typeofData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element = cartItemsArray[index];

        if (element.title === item.name) {
          return true;
        }
      }
    });

    let line_itemToSend: any = line_item.map((item: typeofData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element = cartItemsArray[index];
        if (element.title === item.name) {
          return {
            price: item.price,
            quantity: element.quantity,
          };
        }
      }
    });

    console.log("LINEITEM", line_itemToSend);

    let session = await stripe.checkout.sessions.create({
      line_items: line_itemToSend,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?success=false`,
    });


    console.log("SESSION ========>",session);
    

    return NextResponse.json({link: session.url});
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
