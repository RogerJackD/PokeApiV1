import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CounterCustomHook } from './01-useState/CounterCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { MultiplesPokemon } from './03-examples/MultiplesPokemon';

//import { CounterApp } from './01-useState/CounterApp';
createRoot(document.getElementById('root')).render(
    <>
    <MultiplesPokemon/>
    </>
)
