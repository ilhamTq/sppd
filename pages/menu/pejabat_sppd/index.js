import React, { useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const TablePegawai = () => {
    const [filters1, setFilters1] = useState(null);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');

    const onGlobalFilterChange1 = (e) => {
        const value = e.target.value;
        let _filters1 = {...filters1 };
        _filters1['global'].value = value;

        setFilters1(_filters1);
        setGlobalFilterValue1(value);
    };

    const renderHeader1 = () => {
        return (
            <div className="flex justify-content-between">
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header1 = renderHeader1();

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Pejabat Penanda Tangan Surat Perintah Perjalanan Dinas (SPPD)</h5>
                    <DataTable dataKey="id" header={header1}>
                        <Column filed="no" header="No" sortable />
                        <Column field="nip" header="NIP" style={{ minWidth: '150px' }} sortable />
                        <Column field="nama" header="Nama" style={{ minWidth: '150px' }} sortable />
                        <Column header="Aksi" sortable />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default TablePegawai;
