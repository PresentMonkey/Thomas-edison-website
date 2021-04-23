export class Serial{
    /**
     * Static Function to open port 
     * @returns {Serial}
     */
    static newDevice(){
        return new Serial();
    }
    constructor(){
        this.device;
        this.interfaceNumber = 2;
        this.endpointIn = 5;
        this.endpointOut = 4;

    }
    /**
     * Opens the device port (can only be called from a user function)
     */
    openPort = async()=>{
        const filters = [{ 'vendorId': 0x2341, 'productId': 0x8036 }, // Arduino Leonardo
        { 'vendorId': 0x2341, 'productId': 0x8037 } //Arduin Micro
        ]
        try{
            let device = await navigator.usb.requestDevice({filters: filters});
            this.device = device;
            await device.open();
            await device.selectConfiguration(1);
            await device.claimInterface(this.interfaceNumber);
            await device.controlTransferOut({
                'requestType': 'class',
                'recipient': 'interface',
                'request': 0x22,
                'value': 0x01,
                'index': this.interfaceNumber
            });
        }
        catch(e){
            console.error(e);
        }
    }
    log(){
        console.log(this.device);
    }
    /**
     * Writes to the USB serial
     * @param {string} strings 
     */
    send = async(strings)=>{
        var encoder = new TextEncoder();
        const things = encoder.encode(strings);
        try{
            await this.device.transferOut(this.endpointOut, things);
        }
        catch(e){
            console.error(e);
        }
    }
}