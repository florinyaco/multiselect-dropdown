import React from "react";
import classes from './DisplayList.module.css';

function DisplayList(props) {
    return (
        <div className={classes['list-container']}>
            {/*create a card for each item selected*/}
            {props.items.map(item =>
                <div className={classes['list-card']} key={item.id}>
                    name: <span>{item.name ? item.name : 'N/A'}</span><br />
                    channel: <span>{item.channel_name ? item.channel_name : 'N/A'}</span><br />
                    concentration: <span>{item.concentration_level ? item.concentration_level : 'N/A'}</span><br />
                    data source: <span>{item.data_source_enum ? item.data_source_enum : 'N/A'}</span><br />
                    description: <span>{item.description ? item.description : 'N/A'}</span><br />
                    detector wavelength: <span>{item.detector_wavelength ? item.detector_wavelength : 'N/A'}</span><br />
                    dilution: <span>{item.dilution ? item.dilution : "N/A"}</span><br />
                    injection time: <span>{item.injection_utc ? item.injection_utc : 'N/A'}</span><br />
                    injection volume: <span>{item.injection_volume ? item.injection_volume : 'N/A'}</span><br />
                    label: <span>{item.label ? item.label : 'N/A'}</span><br />
                    nnc: <span>{item.nnc_number ? item.nnc_number : 'N/A'}</span><br />
                    original measurement unit: <span>{item.original_measurement_unit ? item.original_measurement_unit : 'N/A'}</span><br />
                    sample type: <span>{item.sample_type ? item.sample_type : 'N/A'}</span><br />
                    sample weight: <span>{item.sample_weight ? item.sample_weight : 'N/A'}</span><br />
                    scale to uv: <span>{item.scale_to_uv ? item.scale_to_uv : 'N/A'}</span><br />
                    vial: <span>{item.vial ? item.vial : 'N/A'}</span><br />
                </div>)}
        </div>
    )
}

export default DisplayList