import { createStore } from 'redux';
import reducers from './reducers.js';

//store->wartosc poczatkowa stanu
const store = createStore(reducers, store);
//Aby być 'powiadamianym' o zmianach w drzewie stanu przechowywanym w naszym store
//umozliwai odpiecie lisnera, ktory zostal wlasnie stworzony
store.subscribe(() => console.log('zmiana w stanie')) #zmiana w stanie

//aby odpiac ten listener(z lini 8)
var unsubscibe = store.subscribe(() => console.log('zmiana w stanie'));
unsubscribe();

//getState zwraca nam stan aplikacji
//po każdej zmianie w store w consoli bedzie wyswietlany obecny stan
store.subscribe(() => console.log(store.getState()))


//wysyłanie informacji o akcji do store
//jako argument przyjmuje-> obiekt akcji(ale lepiej przekazac kreator akcji)
store.dispatch(addComment('pierwszy komentarz'))
store.dispatch(addComment('drugi komentarz'))


//podlaczenie Redux z React
// pseudokod
store.subscribe(() => {
    const comments = store.getState().comments;
    ReactDOM.render(<CommentsList comments={comments} />, mountingPoint)
});
