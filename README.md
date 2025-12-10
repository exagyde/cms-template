## 📘 Template Next.js + DecapCMS (Static / Offline Ready)

Un template minimaliste et moderne pour créer rapidement un site vitrine statique, géré entièrement via **DecapCMS** en mode offline/local backend.

Ce projet fournit :
- Un site web **Next.js** exportable statiquement (*next export*)
- Une **interface CMS DecapCMS** utilisable sans connexion Internet
- Une organisation simple et évolutive pour vos projets futurs

## 🔧 Prérequis
- Node.js ≥ 18
- npm ou yarn
- Git (optionnel)
- Aucune connexion Internet nécessaire une fois installé

## 🚀 Installation

Clonez ou téléchargez le projet :
```bash
git clone https://github.com/tonrepo/cms-template.git
cd cms-template
```

Installez les dépendances :

```bash
npm install
```

## 📝 Contenu géré dans DecapCMS

Fichiers éditables depuis */admin* :

```plain
content/pages/*.md
```

Exemple d’un fichier Markdown géré par le CMS :

```yaml
---
title: "Page d’accueil"
slug: "home"
---
# Bienvenue  
Une base moderne, sobre et prête pour vos futurs projets.
```

## 🖥️ Lancer le CMS en mode local / offline

1. Lancer le serveur local DecapCMS

```bash
npx decap-server
```

2. Ouvrir la page admin :

```plain
http://localhost:3000/admin/
```

Avec decap-server démarré, l’écran d’authentification disparaîtra.

3. Ensuite pour lancer le site

```bash
npm run dev
```

Le CMS fonctionne :
- sans Git
- sans GitHub
- sans API externe
- en pur local, fichiers .md

## 🏗️ Compiler le site statique

Export statique complet :

```bash
npm run build
npm run export
```

Le site final est généré dans :

```plain
./out/
```

Vous pouvez ouvrir *out/index.html* **sans serveur**, directement dans votre navigateur.

## 🔐 Utilisation du CMS

1. Lancer *npm run dev*
2. Ouvrir *http://localhost:3000/admin/index.html*
3. Modifier le contenu (Pages)
4. Les fichiers Markdown sont automatiquement mis à jour dans */content*
5. Recompiler pour publier le site statique

## 🤝 Contribuer

Ce template a été conçu pour être le plus simple possible.
N’hésitez pas à le forker et à l’adapter à vos futurs projets.

## 📄 Licence

Usage personnel ou professionnel autorisé.
Aucune restriction.