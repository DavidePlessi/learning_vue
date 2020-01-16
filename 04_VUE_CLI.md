# VUE CLI
- Install vue cli with: ```npm install -g @vue/cli```
## Useful commands
- Creation: ```vue create project_name``` 
- Add Plugin: ```vue add plugin_name```
- Vue GUI: ```vue ui```


## Gerarchia cartelle
- node_modules: librerie node di terze parti
- public: la cartella che utilizza node per innestare la nostra applicazione
- src: cartella dei sorgenti
- dist: cartella contenente la build

## Variabili di environment
Vengono utilizzate come variabili distaccate dal sorgente, per aggiungerle creare il file **.env**.
Se aggiungiamo nel nome del file .development il file viene utilizzato con il comando run serve mentre 
se aggiungiamo .production il file viene utilizzato con il comando run build

## Build target
Aggiungendo il parametro --target al comando di build puoi dare tre tipi di build: 
lib, webcomponent(wc), webcomponent async(wc-async).