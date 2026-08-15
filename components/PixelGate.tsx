/* Meta pixel removed 2026-08-15, together with GTM-P3PDGL3J, at Joe's direction.

   This component existed only to suppress the pixel on /m/ health-intent routes.
   With the pixel gone from the landing pages entirely there is nothing left to
   gate, so it renders nothing. It is kept as a component rather than deleted so
   the layout import stays valid and the history of the decision stays readable.

   Meta will not sign a BAA, and these pages collect patient contact details and
   hair-loss intent. Attribution continues via the GHL form params and server-side
   upload, neither of which depends on this. */
export default function PixelGate() {
  return null
}
