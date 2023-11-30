class Api {
    rotas = {
        healthCheck: { rota: `http://localhost:3000/carrinho/healthCheck`, metodo: 'GET' },
        adicionarItemAoCarrinho: { rota: `http://localhost:3000/carrinho`, metodo: 'POST' },
        finalizarCompra: { rota: `http://localhost:3000/carrinho/finalizar-compra`, metodo: 'POST' },
        removerItemDoCarrinho: { rota: `http://localhost:3000/carrinho`, metodo: 'DELETE' },
        relatorio: { rota: `http://localhost:3000/carrinho/relatorio`, metodo: 'GET' }
    }
    async healthCheck() {
        console.log('API >> healthCheck')
        try {
            const response = await fetch(this.rotas.healthCheck.rota)
            const json = await response.json()
            console.log({ json })

            return json
        } catch (error) {
            console.error(error)
        }
    }
    async adicionarItemAoCarrinho(item) {
        console.log('API >> adicionarItemAoCarrinho')
        try {
            const response = await fetch(this.rotas.adicionarItemAoCarrinho.rota,
                {
                    method: this.rotas.adicionarItemAoCarrinho.metodo,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(item)
                })

            const json = await response.json()

            return json
        } catch (error) {
            console.error(error)
        }
    }
    async removerItemDoCarrinho(nome) {
        console.log('API >> removerItemDoCarrinho')
        try {
            
            await fetch(`${this.rotas.removerItemDoCarrinho.rota}?` + new URLSearchParams({
                nome
            }).toString(),
                {
                    method: this.rotas.removerItemDoCarrinho.metodo,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    
                })

            return true
        } catch (error) {
            console.error(error)
        }
    }
    async finalizarCompra() {
        console.log('API >> finalizarCompra')
        try {
            const response = await fetch(this.rotas.finalizarCompra.rota,
                {
                    method: this.rotas.finalizarCompra.metodo,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

            const finalizarCompra = await response.json()

            return finalizarCompra
        } catch (error) {
            console.error(error)
        }
    }
    async relatorio() {
        console.log('API >> relatorio')
        try {
            const response = await fetch(this.rotas.relatorio.rota,
                {
                    method: this.rotas.relatorio.metodo,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

            const relatorio = await response.json()

            return relatorio
        } catch (error) {
            console.error(error)
        }
    }
}