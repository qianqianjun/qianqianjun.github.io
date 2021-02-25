import {People} from './mock/Data'
import React, {Fragment} from 'react'
import Pick from "./components/Pick";
import {BrowserRouter,Route} from 'react-router-dom'
import Add from "./components/Add";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            parter:["83"],
            pre:["83"],
            except: ["???"]
        }
    }

    getPlayer = () => {
        let player = [];
        for (let i = 0; i < this.state.parter.length; i++) {
            player = [
                ...player, ...People[this.state.parter[i]]["parter"],
                ...People[this.state.pre[i]]["pre"]
            ];
        }
        return player.filter(name => this.state.except.indexOf(name) < 0);
    }

    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact>
                    <Pick player={this.getPlayer()}
                          stop={
                              (luckdog) => {
                                  this.setState(
                                      this.setState({
                                          except: [...this.state.except, luckdog]
                                      })
                                  )
                              }
                          }
                          luckdog={this.state.except[this.state.except.length - 1]}/>
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
            </BrowserRouter>
        )
    }
}

export default App;