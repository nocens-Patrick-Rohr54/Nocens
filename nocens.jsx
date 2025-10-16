# Nocens

Site officiel pour les créations artistiques de Patrick Rohr.

## Description
Ce site présente :
- Papillons en epoxy
- Peintures
- Sculptures
- Sections de paiement et dons via PayPal
- Lien vers la campagne GoFundMe pour Justine

## Installation
1. Cloner le repo :
```bash
git clone https://github.com/VOTRE_USERNAME/Nocens.git
cd Nocens
```
2. Installer les dépendances :
```bash
npm install
```
3. Lancer le projet en local :
```bash
npm start
```
Le site sera disponible sur `http://localhost:3000`

## Déploiement
Pour déployer sur Vercel :
1. Créez un compte sur [Vercel](https://vercel.com).
2. Cliquez sur "New Project" → Import Git Repository.
3. Sélectionnez le repo GitHub `Nocens`.
4. Vercel détectera automatiquement le projet React et déploiera le site.
5. Les mises à jour futures se feront automatiquement à chaque push sur GitHub.

## Ajouter des œuvres
- Placez les images dans le dossier `public/`.
- Ajoutez-les dans les tableaux `samplePaintings` ou `sampleSculptures` dans `Nocens.js` avec :
```javascript
{ id: "painting-1", title: "Titre de la peinture", price: 100, img: "/nom-image.jpg" }
```

## Contact
Pour commandes, collaborations ou questions :
- Email : contact@nocens.example
- Instagram : [@patrick.nocens](https://www.instagram.com/patrick.nocens/)
- Facebook : [Patrick Rohr](https://www.facebook.com/Patrick.Rohr)
- TikTok : [@nocenslowo](https://www.tiktok.com/@nocenslowo)

---
**Paiement et dons via PayPal.**
