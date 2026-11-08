# Portfolio – Lucas Decret

Portfolio réalisé avec **Next.js** (App Router), **TypeScript** et **Tailwind CSS**.

## Pages

- `/` : accueil avec les derniers projets
- `/projets` : tous les projets, avec un filtre par catégorie
- `/projets/[slug]` : détail d'un projet (404 si le projet n'existe pas)

## Organisation

- `app/` : les pages et le layout (menu + pied de page)
- `components/` : les composants réutilisables
- `data/projets.ts` : la liste des projets (titre, image, année, tags…)
- `public/projets/` : les images des projets

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).
