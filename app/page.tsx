import { redirect } from "next/navigation";

// The middleware handles locale redirects, but this is a fallback
export default function RootPage() {
  redirect("/en");
}
