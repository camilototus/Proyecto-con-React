import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
  const context = useContext(ShoppingCartContext)

// Account
  const account =localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
    // Has an account
  const noAccountInLocalStorage = parsedAccount ? object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    return (
      <Layout>
        <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
        <div className="flex flex-col w-80">
          <p>
            <span className="font-ligth text-sm">Email: </span>
            <span>{parsedAccount?.gmail}</span>
          </p>
          <p>
            <span className="font-ligth text-sm">Password: </span>
            <span>{parsedAccount?.password}</span>
          </p>
          <Link
            to="/">
              <button
                className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
                disabled={!hasUserAnAccount}>
                Log in
              </button>
          </Link>
          <div>
            <a className="font-ligth text-xs underline underline-offset-4" href="/">Forgot my Password</a>
          </div>
          <button
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
            disabled={hasUserAnAccount}>
            Sign Up
          </button>
        </div>
      </Layout>
    )
  }
  
  export default SignIn