# Ciclo di vita
Eventi chiave: 
- **beforeCreate**: viene eseguito prima dell'iniziazione del componente
- **created**: siamo in grado di accedere a tutti gli elementi attivi ma il dom ancora non è stato renderizzato
- **beforeMount**: prima che venga montata l'applicaizone
- **mounted**: una volta montata l'applicazione
- **beforeUpdate**: prima che venga aggiornata l'applicaizone, il v-dom ri-renderizza e patcha
- **updated**: una volta aggiornata l'applicaizone
- **beforeDestroy**: prima che venga dismesso il componente
- **destroyed**: una volta dismesso il componente