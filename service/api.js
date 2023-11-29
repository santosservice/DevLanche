class Api {
    rotas = {
        healthCheck: { rota: `http://localhost:3000/carrinho/healthCheck`, metodo: 'GET' },
        adicionarItemAoCarrinho: { rota: `http://localhost:3000/carrinho`, metodo: 'POST' },
        removerItemDoCarrinho: { rota: `http://localhost:3000/carrinho`, metodo: 'DELETE' }
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
    async removerItemDoCarrinho(nome_item) {
        console.log('API >> adicionarItemAoCarrinho')
        try {
            await fetch(this.rotas.adicionarItemAoCarrinho.rota + `/${nome_item}`,
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
}