/* Toma la siguiente lista de explorers:  */
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

/* Sobre esta lista, realiza lo siguiente: */

/* 1.- Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH */
explorers.forEach(explorer => console.log(explorer.name))

/* 2.- Imprime el stack de cada explorer, usa FOR EACH */ 
explorers.forEach(explorer => console.log(explorer.stack))

/* 3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP */
const stack_list = explorers.map((explorer) => explorer.stack)
console.log(`\nLista con el stack de cada explorer: `)
console.log(stack_list)

/* 4.- Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)*/
const stack_js = explorers.filter((explorer) => explorer.stack.includes('js'))
console.log('\nExplorers que saben JS: ')
console.log(stack_js)

/* 5.- Busca el primer explorer que sea de la CDMX, usa FIND*/
const cmdx_explorer = explorers.find((explorer) => explorer.city == 'CDMX')
console.log('\nExplorer que vive en la cdmx: ')
console.log(cmdx_explorer)

/* 6.- Obtén la suma de todos los exercises_completed, usa REDUCE */
const exercises_completed_num = explorers.map((explorer)=>explorer.exercises_completed).reduce((acc, element) => acc + element)
console.log(`\nNúmero de ejercicios completos: ${exercises_completed_num}`)

/* 7.- Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME */

const exercisesFinished = explorers.map((explorer)=>explorer.missions.frontend.exercisesFinished).some((finished)=>finished === true)

console.log(`\nAl menos un explorer terminó todos sus ejercicios de frontend? ${exercisesFinished}`)

/* 8.- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY */

const everyExercisesFinished = explorers.map((explorer)=>explorer.missions.onboarding.exercisesFinished).every((finished)=>finished === true)

console.log(`\nTodos los explorers terminaron los ejercicios del onboarding? : ${everyExercisesFinished}`)