import React from "react";
import CardPay from "./CardPay";
import pay1 from "../../assets/images/pay1.png"
import pay2 from "../../assets/images/pay2.png"
import pay3 from "../../assets/images/pay3.png"
import "./Payment.css"
export const Payment = () => {
  return (
    <section className="payment-section">
      <div className="payment-section-container">
        <CardPay image={pay1} title="شحن مجاني" text="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا النص من مولد النص العربى"/>
        <CardPay image={pay2} title="منتجات جديدة يوميا" text="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا النص من مولد النص العربى"/>
        <CardPay image={pay3} title="دفع عند الإستلام" text="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا النص من مولد النص العربى"/>
         </div>
    </section>
  );
};
