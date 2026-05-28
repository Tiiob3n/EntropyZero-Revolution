# Spécification d'Équilibrage : Projet Entropy (Mekanism)

*Note de conversion système : Tous les calculs énergétiques sont basés sur le système de Joules natif de Mekanism, suivant le ratio standard : 1 RF = 2.5 J.*

---

## Armure MekaSuit

### Gestion Flux & Capacité Énergétique
> **Note de design :** L'objectif est d'accentuer le statut d'équipement de fin de partie (endgame) de la MekaSuit en augmentant massivement ses réserves, tout en demandant une infrastructure de recharge plus robuste.

* **Capacité Énergétique Maximale :** 16.000.000 J -> 40.000.000 J
* **Vitesse de Transfert (Charge) :** 100.000 J -> 200.000 J
* **Efficacité du Module Solaire :** 500 J -> 1.500 J

### Coefficients d'Absorption des Dégâts
* **Attaques Physiques standards :** 100.000 J -> 250.000 J
* **Dégâts Magiques & Altérations :** 1.000 J -> 2.500 J
* **Amortissement des Chutes :** 50 J -> 250 J

### Coût Opérationnel des Modules
* **Module d'Impulsion Verticale (Jump Boost) :** 1.000 J -> 2.000 J
* **Module d'Assistance Cinétique (Sprint) :** 100 J -> 250 J
* **Module de Purification (Dissipation des Potions) :** 40.000 J -> 80.000 J

---

## Outil Meka-Tool

### Statistiques Offensives & Célérité
> **Note de design :** Ajustements appliqués pour garantir que le Meka-Tool représente une réelle progression technologique et une amélioration incontestable par rapport à l'Atomic Disassembler.

* **Dégâts Contondants de Base :** 4 -> 24
* **Cadence d'Attaque (Vitesse) :** -2.4 -> -0.8

### Configuration Énergétique
* **Capacité Énergétique Maximale :** 16.000.000 J -> 40.000.000 J
* **Vitesse de Transfert (Charge) :** 100.000 J -> 200.000 J

### Coût d'Activation par Mode
* **Consommation Passive (Minage standard) :** 10 J -> 50 J
* **Mode Toucher de Soie (Silk Touch) :** 100 J -> 500 J
* **Mode Arme de Mêlée :** 2.000 J -> 8.000 J
* **Mode Téléportation Ciblée :** 1.000 J -> 2.500 J
* **Modes Utilitaires secondaires (Labourage, Pelle, Hache, Cisailles, Ébranchage) :** 10 J -> 50 J

---

## Système de Génération d'Énergie

### Générateurs Solaires (Alignement Powah)
* **Générateur Solaire standard :**
  * Production : 50 J/t -> 150 J/t
  * Capacité Interne : 96.000 J -> 100.000 J
* **Générateur Solaire Avancé :**
  * Production : 300 J/t -> 1.200 J/t
  * Capacité Interne : 200.000 J -> 250.000 J

### Générateur Thermique (Heat Generator)
* **Production Passive :** 200 J/t -> 800 J/t

### Générateur Éolien (Wind Generator)
* **Rendement au Sol (Min - Y=0) :** 60 J/t -> 150 J/t
* **Rendement en Altitude (Max - Y=limite) :** 480 J/t -> 900 J/t

### Générateur à Combustion de Gaz (Gas-Burning)
> **Note de design :** Réduction drastique de l'efficacité pour casser la stratégie dominante (meta) de la production d'énergie massive et simpliste via les fermes à melons (Éthylène).

* **Durée de Combustion (Ethene Ticks) :** 40 -> 20
* **Multiplicateur de Densité Énergétique :** 40 -> 8

### Réacteur à Fission
> **Note de design :** Légère baisse de rendement pour équilibrer la progression vis-à-vis des autres réacteurs avancés du modpack.

* **Énergie convertie par unité de Combustible :** 1.000.000 J -> 250.000 J

### Turbine Industrielle
> **Note de design :** Optimisation des structures multi-blocs afin de réduire le nombre de blocs nécessaires pour un rendement équivalent. Ce ratio spécifique fixe le débit maximum à exactement 15.000.000 mb/t.

* **Nombre de Lames par Bobine (Coil) :** 4 -> 8
* **Débit d'Évacuation des Évents (Vents) :** 16.000 mb/t -> 43.478,262 mb/t
* **Taux de Condensation :** 64.000 mb/t -> 256.000 mb/t

### Chaudière Thermoélectrique (Boiler)
> **Note de design :** Amélioration structurelle permettant d'obtenir un parfait ratio 1:1. Une unique chaudière est désormais capable de gérer l'intégralité du flux d'un réacteur à fission.

* **Volume d'Eau par bloc de Réservoir :** 16.000 mb -> 32.000 mb
* **Volume de Vapeur par bloc de Réservoir :** 16.000 mb -> 320.000 mb
* **Liquide de Refroidissement Chaud (Heated Coolant) :** 256.000 mb -> 512.000 mb
* **Liquide de Refroidissement Refroidi (Cooled Coolant) :** 25.600 mb -> 512.000 mb

### Réacteur à Fusion
> **Note de design :** Rééquilibrage global de la puissance générée en fin de jeu (200 MRF -> 80 MRF) afin de diversifier les sources d'énergie viables au niveau final.

* **Capacité du Réservoir de Carburant :** 1.000 mb -> 500 mb
* **Efficacité Thermocouple :** 0.05 -> 0.04
* **Conductivité Thermique de l'Enceinte (Casing) :** 0.1 -> 0.333333333
* **Ratio de Transfert Thermique de l'Eau :** 0.3 -> 272727272727

---

## Gestion de la Radioactivité & Déchets

### Dissipation Environnementale
> **Note de design :** Accélération majeure de la décroissance de la radioactivité pour purifier les zones contaminées du serveur beaucoup plus rapidement.

* **Taux de Décroissance à la Source :** 0.9995 -> 0.9975
* **Taux de Décroissance de la Cible :** 0.9995 -> 0.9975

### Traitement en Barils de Stockage (Radioactive Waste Barrel)
* **Fréquence de Traitement (Ticks par cycle) :** 20 -> 10 (Cycles deux fois plus rapides)
* **Volume Décomposé par cycle :** 1 mb -> 2 mb

---

## Optimisation des Machines

### Améliorations Générales (Upgrades)
> **Note de design :** Augmentation du multiplicateur maximal pour permettre aux machines de produire davantage sous leur forme maximale, limitant le besoin d'aligner des dizaines de fois la même machine (optimisation des performances du serveur et réduction du lag).

* **Multiplicateur d'efficacité (Plafond des Upgrades) :** 10x -> 16x

### Activateur de Neutrons Solaires (SNA)
* **Taux de Production de Polonium :** 64 mb/t -> 256 mb/t

### Pompe Électrique (Electric Pump)
* **Ratio d'Extraction d'Eau Lourde (par tranche de 1000mb) :** 10 mb -> 50 mb

### Tour d'Évaporation Thermique
> **Note de design :** Augmentation drastique du débit global pour le faire passer de 1080 mb/t à 4995 mb/t, évitant ainsi la surcharge visuelle et technique de complexes d'évaporation géants.

* **Multiplicateur de Température (Volume de Sortie) :** 0.4 -> 1.85
* **Capacité Thermique Requise (Seuil d'efficacité max) :** 100 -> 600

### Systèmes Lasers
* **Consommation Opérationnelle :** 10.000 J -> 50.000 J
* **Réservoir d'Énergie Interne :** 2.000.000 J -> 10.000.000 J

### Modulateur de Phase Supercritique (SPS — Antimatière)
> **Note de design :** Ajustement majeur visant à limiter la suprématie de la production d'antimatière infinie en fin de jeu (Chute du rendement global : 400 MRF -> 40 MRF).

* **Coût Énergétique par mb d'Antimatière :** 1.000.000 J -> 100.000 J