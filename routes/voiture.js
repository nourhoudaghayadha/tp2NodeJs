const express =require ('express');
const router = express.Router();
let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];
//router.get('/add', (req, res) => {
 //   res.sendFile('D:/PC/Desktop/GLSI/node/tp2/addvoiture.html');
//});
// API pour ajouter une voiture au tableau voiture
router.post('/add', (req, res) => {
    const { id, name } = req.body;
    const newVoiture = { id, name };
    voitures.push(newVoiture);
    res.status(201).send({message:"voiture crée ",data:voitures})
});

//  lister tous les voitures
router.get('/', (req, res) => {
    res.send(voitures)
});

// API pour lister une voiture à travers le paramètre passé
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});

// API pour modifier une voiture avec un id spécifique
router.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === id);
    if (index !== -1) {
        voitures[index] = req.body;
        res.json(voitures[index]);
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});

// API pour supprimer une voiture avec un id spécifique
router.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === id);
    if (index !== -1) {
        voitures.splice(index, 1);
        res.json({ message: 'Voiture supprimée avec succès' });
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});
module.exports = router;