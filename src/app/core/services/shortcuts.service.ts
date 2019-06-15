import {Injectable} from '@angular/core'
import {DialogService} from './dialog.service'
import {MmpService} from './mmp.service'
import {Router} from '@angular/router'
import {Hotkey, HotkeysService} from 'angular2-hotkeys'

@Injectable({
    providedIn: 'root'
})
export class ShortcutsService {

    private hotKeys: Hotkey[]

    constructor (private mmpService: MmpService,
                 private hotkeysService: HotkeysService,
                 private router: Router,
                 private dialogService: DialogService) {
    }

    /**
     * Add all global hot keys of the application.
     */
    public init () {
        this.hotKeys = [{
            keys: '?',
            description: 'TOOLTIPS.SHORTCUTS',
            callback: () => {
                this.router.navigate(['/shortcuts'])
            }
        }, {
            keys: 'f2',
            description: 'TOOLTIPS.EDIT_NODE',
            callback: () => {
                this.mmpService.editNode()
            }
        }, {
            keys: 'alt+n',
            description: 'TOOLTIPS.NEW_MAP',
            callback: () => {
                this.mmpService.new()
            }
        }, {
            keys: 'ctrl+i',
            description: 'TOOLTIPS.IMPORT_MAP',
            callback: () => {
                this.dialogService.importMap()
            }
        }, {
            keys: 'ctrl+e',
            description: 'TOOLTIPS.EXPORT_MAP',
            callback: () => {
                this.dialogService.exportMap()
            }
        }, {
            keys: 'ctrl+z',
            description: 'TOOLTIPS.UNDO_MAP',
            callback: () => {
                this.mmpService.undo()
            }
        }, {
            keys: 'ctrl+shift+z',
            description: 'TOOLTIPS.REDO_MAP',
            callback: () => {
                this.mmpService.redo()
            }
        }, {
            keys: 'alt+=',
            description: 'TOOLTIPS.ADD_NODE',
            callback: () => {
                this.mmpService.addNode()
            }
        }, {
            keys: 'alt+-',
            description: 'TOOLTIPS.REMOVE_NODE',
            callback: () => {
                this.mmpService.removeNode()
            }
        }, {
            keys: 'alt+shift+left',
            description: 'TOOLTIPS.MOVE_NODE_TO_THE_LEFT',
            callback: () => {
                this.mmpService.moveNodeTo('left')
            }
        }, {
            keys: 'alt+shift+right',
            description: 'TOOLTIPS.MOVE_NODE_TO_THE_RIGHT',
            callback: () => {
                this.mmpService.moveNodeTo('right')
            }
        }, {
            keys: 'alt+shift+up',
            description: 'TOOLTIPS.MOVE_NODE_UPWARD',
            callback: () => {
                this.mmpService.moveNodeTo('up')
            }
        }, {
            keys: 'alt+shift+down',
            description: 'TOOLTIPS.MOVE_NODE_DOWN',
            callback: () => {
                this.mmpService.moveNodeTo('down')
            }
        }, {
            keys: 'ctrl+alt+s',
            description: 'TOOLTIPS.SETTINGS',
            callback: () => {
                this.router.navigate(['/settings'])
            }
        }, {
            keys: 'alt+left',
            description: 'TOOLTIPS.SELECT_NODE_ON_THE_LEFT',
            callback: () => {
                this.mmpService.selectNode('left')
            }
        }, {
            keys: 'alt+right',
            description: 'TOOLTIPS.SELECT_NODE_ON_THE_RIGHT',
            callback: () => {
                this.mmpService.selectNode('right')
            }
        }, {
            keys: 'alt+up',
            description: 'TOOLTIPS.SELECT_NODE_BELOW',
            callback: () => {
                this.mmpService.selectNode('up')
            }
        }, {
            keys: 'alt+down',
            description: 'TOOLTIPS.SELECT_NODE_ABOVE',
            callback: () => {
                this.mmpService.selectNode('down')
            }
        }, {
            keys: 'alt+c',
            description: 'TOOLTIPS.CENTER_MAP',
            callback: () => {
                this.mmpService.center()
            }
        }, {
            keys: 'ctrl+c',
            description: 'TOOLTIPS.COPY_NODE',
            callback: () => {
                this.mmpService.copyNode()
            }
        }, {
            keys: 'ctrl+x',
            description: 'TOOLTIPS.CUT_NODE',
            callback: () => {
                this.mmpService.cutNode()
            }
        }, {
            keys: 'ctrl+v',
            description: 'TOOLTIPS.PASTE_NODE',
            callback: () => {
                this.mmpService.pasteNode()
            }
        }, {
            keys: 'ctrl+=',
            description: 'TOOLTIPS.ZOOM_IN_MAP',
            callback: () => {
                this.mmpService.zoomIn()
            }
        }, {
            keys: 'ctrl+-',
            description: 'TOOLTIPS.ZOOM_OUT_MAP',
            callback: () => {
                this.mmpService.zoomOut()
            }
        }].map(this.getHotKey)

        this.hotkeysService.add(this.hotKeys)
    }

    /**
     * Return all the shortcuts.
     */
    public getHotKeys (): Hotkey[] {
        return this.hotKeys
    }


    /**
     * Get some shortcut parameters and return the corresponding hot key.
     */
    private getHotKey (options: {
        keys: string | string[],
        description: string,
        callback: (event?: KeyboardEvent) => void
    }) {
        return new Hotkey(options.keys, (event: KeyboardEvent) => {
            options.callback(event)

            return false
        }, undefined, options.description)
    }

}
