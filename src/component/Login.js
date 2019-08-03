import React from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

function login (props){
    // const footer = (
    //     <div>
    //         <Button label="Login" icon="pi pi-check" onClick={this.onHide} />
    //         <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
    //     </div>
    // );
    return(
        <Dialog visible={props.visible} style={{width: '50vw'}}> </Dialog>
    )
}
export default login;