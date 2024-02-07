import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        slug: { type: String },
        name: { type: String },
        quantity: { type: Number },
        image: { type: String },
        price: { type: Number },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String },
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
      location: {
        lat: Number,
        lng: Number,
        address: String,
        name: String,
        vicinity: String,
      },
    },
    paymentMethod: { type: String },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number },
    shippingPrice: { type: Number },
    taxPrice: { type: Number },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
