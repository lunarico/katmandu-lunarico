export const miStockResta = (quantity, setQuantity) => {
    if (parseInt(quantity) >= 1) {
        setQuantity(quantity-1)
    }else{
        alert("No tenés productos agregados")
    }
}

export const miStockSuma = (quantity, setQuantity, stock) => {
    if (parseInt(quantity) < parseInt(stock)) {
        setQuantity(quantity+1)
    }else{
        alert("No tenemos más stock")
    }
}
