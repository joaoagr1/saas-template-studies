import { useEffect } from "react";
import toast from "react-hot-toast";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";

const useMercadoPago = () => {
  const router = useRouter();

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY);
  }, []);

  async function createMercadoPagoCheckout(checkoutData) {
    try {
      const response = await fetch("/api/mercado-pago/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });

      const data = await response.json();

      router.push(data.initPoint);
    } catch (error) {
      toast.error(`Error creating checkout`);
      console.log(error);
    }
  }

  return { createMercadoPagoCheckout };
};

export default useMercadoPago;
