import { NextApiRequest, NextApiResponse } from "next";
import { SHOPIFY_CHECKOUT_URL_COOKIE } from "@framework/const"

export default function checkout(req: NextApiRequest, res: NextApiResponse) {
  // res.json({message: "Hello World"})
  const { cookies } = req
  const checkoutUrl = cookies[SHOPIFY_CHECKOUT_URL_COOKIE]

  if (checkoutUrl) {
    res.redirect(checkoutUrl)
  } else {
    res.redirect("/")
  }
}