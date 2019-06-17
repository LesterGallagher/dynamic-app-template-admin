import { get, some } from 'lodash'
import LoadingSpinner from '../components/Loading/Loading' // or wherever your spinner component is
import { isLoaded, isEmpty } from 'react-redux-firebase'
import {
  compose,
  mapProps,
  branch,
  renderComponent
} from 'recompose'

// HOC that shows a component while condition is true
export function renderWhile(condition, component) {
  return branch(condition, renderComponent(component))
}

// HOC that shows loading spinner component while list of propNames are loading
export function spinnerWhileLoadingpropNames(propNames) {
  return renderWhile(
    props => some(propNames, name => !isLoaded(get(props, name))),
    LoadingSpinner
  )
}

// HOC that shows a component while any of a list of props isEmpty
export function renderIfEmpty(propNames, component) {
  return renderWhile(
    // Any of the listed prop name correspond to empty props (supporting dot path names)
    props => some(propNames, (name) => {
      const propValue = get(props, name)
      return isLoaded(propValue) && isEmpty(propValue)
    }),
    component
  )
};

