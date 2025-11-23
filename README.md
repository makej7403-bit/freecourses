# FreeCourses — Deployment Notes
1. Delete any existing `pages/` folder (this project uses App Router).
2. Create `.env.local` from `.env.example` and fill keys.
3. Install deps: `npm install`.
4. Run locally: `npm run dev`.
5. Push to GitHub and import to Vercel.
6. In Vercel, set ENV variables (OPENAI_API_KEY and NEXT_PUBLIC_FIREBASE_* and NEXT_PUBLIC_ADMIN_EMAIL/PASSWORD).

If build fails, open the deployment logs and paste the errors to me.
