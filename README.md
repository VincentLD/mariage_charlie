# starter_gulp_lpmiaw_v1

Ce starter crée deux tâches automatisées : 
    • une tache nommée « dev » qui permet de lancer un serveur Web et qui rafraîchit l’affichage du site à chaque modification des fichiers html et des fichiers css
    • une tache nommée « build » qui 
        ◦ créer un dossier « dist » contenant le site qui sera déployé sur un serveur
        ◦ minifie les fichiers css 
        ◦ préfixe les règles css pour les rendre compatible avec certaines versions des navigateurs
        ◦ minifie les fichiers html
        ◦ compresse les images 

# Config nécessaire
  . Node
  . npm 
  . gulp-cli en global

# Utilisation

clone du starter
```sh
git clone https://gitlab.univ-lr.fr/abourmau/starter_gulp_lpmiaw_v1.git
```

changer le nom 
```sh
mv starter_gulp_lpmiaw_v1 nouveau_nom
```

déplacement dans le dossier
```sh
cd nouveau_nom
```

installation
```sh
npm install
```

lancer une tache gulp
```sh
gulp dev
```
ou

```sh
gulp build
```



