

const vendingMachineABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"donutBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVendingMachineBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"restock","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const vendingMachineContract = (web3) => {
  return new web3.eth.Contract(
    vendingMachineABI,
    "0x6A9995bDbd3677f91D0F9382d8dD52cC5242e7C9"
  )
}
export default vendingMachineContract



// import Web3 from "web3"

// // input INFURA_API_URL
// const provider = new Web3.providers.HttpProvider(
//   "https://goerli.infura.io/v3/1cfdd0a5401f4891951b3001cf72fc9b"
// )

// const web3 = new Web3(provider)

// // abi copy / pasted from './build/blockchain_contracts_VendingMachine_sol_VendingMachine.abi'
// const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"donutBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVendingMachineBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"restock","outputs":[],"stateMutability":"nonpayable","type":"function"}]

// const vendingMachineContract = new web3.eth.Contract(
//   abi,
//   "0x6A9995bDbd3677f91D0F9382d8dD52cC5242e7C9"
//   )

// export default vendingMachineContract
