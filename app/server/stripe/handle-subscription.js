import "server-only"; // Evita que o código seja executado no cliente

import { sendEmailTo } from "@/app/lib/ses";

import { db } from "@/app/lib/firebase";

export async function handleStripeSubscription(event) {
  const customerId = event.data.object.customer;
  const userId = event.data.object.metadata?.userId;
  const userEmail = event.data.object.metadata?.userEmail;

  if (customerId && userId && userEmail) {
    const userRef = db.collection("users").doc(userId);
    const doc = await userRef.get();

    if (doc.exists) {
      await userRef.update({
        subscription: true,
      });

      await sendEmailTo({
        userEmail,
        emailSubject: "Assinatura ativada com sucesso!",
        emailBody: `<html><body>
          <p>Parabéns, você tem acesso a todos os recursos do site.</p>
        </body></html>`,
      });
    }
  }
}
