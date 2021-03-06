import { connect } from 'react-redux'
import {
  registerRootFolder,
  unregisterRootFolder,
  openItem
} from '../actions/index'
import { AppState } from '../Types'
import Toolbar, { StateByProps, DispatchByProps } from '../components/Toolbar'

const mapStateToProps = (state: AppState): StateByProps => ({
  currentItem: state.currentItem,
  canUnregisterRootFolder: state.currentFolder.isRoot
})

const mapDispatchToProps = (dispatch: any): DispatchByProps => ({
  registerRootFolder: () => {
    dispatch(registerRootFolder())
  },
  unregisterRootFolder: () => {
    dispatch(unregisterRootFolder())
  },
  openItem: (itemPath: string) => {
    dispatch(openItem(itemPath))
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)

export default Container
