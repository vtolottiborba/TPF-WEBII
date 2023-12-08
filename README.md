# VINÍCIUS TOLOTTI BORBA
## PROJET FINAL WEBII
### JEU "PENALTY KICK"

### Page "Index"
SetInterval - Les lettres changent de couleur toutes les 1000 ms (bleu – blanc)
onmouseover – lorsque la souris survole une lettre, elle « saute » et change d’opacité (devient pâle)
onmouseout – la lettre retourne à sa position initiale et la couleur reprend son opacité d'origine
Onkeyup – si la touche « espace » ou « tab » est pressée, 'backgroundImage' change
onmousemove – 'backgroundImage' se déplace selon le mouvement de la souris

### Page "Register"
onfocus – à chaque champ du formulaire sélectionné, la couleur de fond de la page change selon l'ordre du tableau (bleu, noir, blanc). De plus, 5 ballons apparaissent sur l’écran à des positions différentes. (chaque champ sélectionné, +5 ballons)
onclick – si on clique sur un ballon, il commence à se déplacer plus rapidement dans une direction aléatoire, en respectant les limites de l'écran

### Page "Chat"
Animation selon les commandes :
- Kick1: un coup de pied dans le coin inférieur gauche
- Kick2: un coup de pied dans le coin supérieur gauche
- Kick3: un coup de pied dans le coin inférieur droit
- Kick4: un coup de pied dans le coin supérieur droit
- Toute autre commande: un coup de pied droit et haut
Le joueur (Luis Suárez) se déplace à chaque coup sur le ballon.
Si le joueur marque un but, le tableau des scores marque pour l'usager, les supporters célèbrent et 'backgroundImage' change aléatoirement parmi 3 choix. Si le gardien défend la pénalité, le Visiteur augmente son score, les supporters sifflent et 'backgroundImage' change avec le joueur triste (setTimeOut).
La défense du gardien se fait de manière aléatoire, chaque position a son image qui change (remove, add)
