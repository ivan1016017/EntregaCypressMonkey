describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    })
})
function randomEvent(monkeysLeft) {


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    var items = ['a','button','input']
    function getRandomIndexEvent() {
        let min = 0;
        let max = items.length;
        return Math.floor(Math.random()*(max-min)) + min 
    }

    let domElement = items[getRandomIndexEvent()]
    let isInDom = cy.get(domElement).then(($el) => {
        Cypress.dom.isElement($el) // true
      })
    

    while(!isInDom){
        domElement = items[getRandomIndexEvent()]
        isInDom = cy.get(domElement).then(($el) => {
            Cypress.dom.isElement($el) // true
          })
    }
    if (isInDom){
        console.log('this is a dom element' + domElement)
    }

    function userID() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }



    if(monkeysLeft > 0) {
        cy.get(domElement).then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink) ) {
                cy.wrap(randomLink).click({force: true});
                if (domElement === 'input') {
                    console.log('We are in an input')
                    cy.get(randomLink).type(String(userID()), { force: true })
                }
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomEvent(monkeysLeft);
        });
    }   
}