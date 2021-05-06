// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names) {
   let messages = []
        for (let i =0; i < names.length; i++) {  
            messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)

            }
        return messages
         }

function countDown() {
    let count = 10
        while (count > -1) {
            console.log(count--)

        }
}