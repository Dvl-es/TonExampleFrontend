import './App.css'
import { TonConnectButton} from "@tonconnect/ui-react";
import {useMainContract} from "./hooks/useMainContract.ts";
import {useTonConnect} from "./hooks/useTonConnect.ts";
import WebApp from '@twa-dev/sdk';

function App() {
    const {
        contract_address,
        counter_value,
        contract_balance,
        sendIncrement,
    } = useMainContract();

    const { connected } = useTonConnect()

    const showAlert = () => {
        WebApp.showAlert("Hey there!");
    };

    return (
        <div>
            <div>
                <TonConnectButton />
            </div>
            <div>
                <div className='Card'>
                    <b>{WebApp. platform}</b>
                    <b>Our contract Address</b>
                    <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
                    <b>Our contract Balance</b>
                       {contract_balance && (
                        <div className= 'Hint'>{contract_balance}
                    </div>
                    )}
                </div>

                <div className='Card'>
                    <b>Counter Value</b>
                    <div>{counter_value ?? "Loading..."}</div>
                </div>

                <a
                          onClick={() => {
                            showAlert();
                          }}
                        >
                          Show Alert
                </a>

                {connected && (
                    <a
                        onClick={() => {
                            sendIncrement();
                        }}
                    >
                        Increment by 3
                    </a>
                )}
            </div>
        </div>
    );
}

export default App
