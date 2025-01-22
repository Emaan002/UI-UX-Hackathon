import { client } from "@/sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        address,
        city,
        postalCode,
        country,
        phone,
        orderItems,
        totalAmount,
      } = req.body;

      // Create a new order document
      const order = await client.create({
        _type: "order",
        customerName: name,
        email,
        address,
        city,
        postalCode,
        country,
        phone,
        orderItems,
        totalAmount,
        status: "pending", // default status
      });
     

      res.status(200).json({ success: true, order });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to save order" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
