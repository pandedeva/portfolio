import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
// !HARUS VERIFED DOMAIN LEWAT NETLYFI OR VERCEL

try {
  const data = await resend.emails.send({
    from: fromEmail,
    to: `email@gmail.com`,
  });
} catch (error) {}

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Deva <devapande66@gmail.com>",
      to: ["devapande66@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
