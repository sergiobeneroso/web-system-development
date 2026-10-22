const nameInput = document.querySelector('input[name="expense-name"]')
const amountInput = document.querySelector('input[name="expense-amount"]')
const addButton = document.getElementById('add-expense')
const list = document.getElementById('expense-list')
const totalElement = document.getElementById('total')
const errorElement = document.getElementById('error')

let expenses = []

const render = () => {
  list.innerHTML = ''

  expenses.forEach(expense => {
    const li = document.createElement('li')
    li.textContent = `${expense.name}: ${expense.amount.toFixed(2)} €`
    list.appendChild(li)
  })

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  totalElement.textContent = total.toFixed(2)
}
addButton.addEventListener('click', () => {
  const name = nameInput.value.trim()
  const amount = Number(amountInput.value)

  if (name === '') {
    errorElement.textContent = 'El nombre no puede estar vacío'
    return
  }

  if (isNaN(amount) || amount <= 0) {
    errorElement.textContent = 'La cantidad debe ser un número positivo'
    return
  }

  errorElement.textContent = ''
  expenses = expenses.concat({ name, amount })
  render()

  nameInput.value = ''
  amountInput.value = ''
})
