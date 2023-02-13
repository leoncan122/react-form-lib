import React, {Component, createElement, JSXElementConstructor} from 'react';


function genComponentStyle(tag: any) {
    return function(strings: any, ...vals: any) {
        return class extends Component {
            style: any
            evalInterpolation = (props: any, strings: [], vals: any) => {
              let resultStr = ""
              for (var i = 0; i < strings.length; i++) {
                  var str: string = strings[i];
                  var val
                  if(vals) {
                      val = vals[i]
                      if(val !== undefined) {
                          if(typeof val === "function") {
                              val = val(props)
                          }
                          str += val
                      }
                  }
                  resultStr += str
              }
              return resultStr
          }
            computeStyle = (props: any, strings: any, vals: any) => {
              strings = this.evalInterpolation(props, strings, vals)
              this.style = {}
              strings.split(";").forEach((str: string)=> {
                  let [prop, val] = str.trim().split(":")
                  if(prop !== undefined && val !== undefined) {
                      prop = prop.trim()
                      val = val.trim()
                      this.style[prop] = val
                  }
              });
              return this.style
          }
            constructor(props: any) {
                super(props)
                this.style = {}
            }
            componentWillMount() {
                this.style = this.computeStyle(this.props, strings, vals)
            }
            componentWillUpdate(props: any) {
                this.style = this.computeStyle(props, strings, vals)
            }
            render() {
                return (
                    createElement(tag, { style: this.style, ...this.props })
                )
            }
        }        
    }
  }
  const tags = [
    "textarea",
    "div"
  ]
  const styled: any = {}
  tags.forEach(tag => {
      styled[tag] = genComponentStyle(tag)
  })
  export default styled