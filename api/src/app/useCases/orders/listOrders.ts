import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const categories = await Order.find()
      .sort({createdAt: 1})
      .populate('products.product');

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
