import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            alamat: '',
            hobi: '',
            umur: null
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let umur = this.state.umur;
        if (!Number(umur)) {
            alert("silahkan isi usia anda terlebih dahulu");
        }
    }

    onChangeHandler = (event) => {
        let nama = event.target.name;
        let alamat = event.target.alamat;
        let hobi = event.target.hobi;
        let val = event.target.value;
        this.setState({
            [nama]: val,
            [alamat]: val,
            [hobi]: ''
        });
    }
    render() {
        return (
            <div className="wraperform">
                <form onSubmit={this.onSubmitHandler}>
                    <h1>Halo {this.state.nama}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="nama" placeholder="Masukan Nama Anda" className="text" required />
                    <h1>Sebutkan Salah Satu Hobi Kamu {this.state.hobi}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="hobi" placeholder="Masukan Hobi Anda" className="text" required />
                    <h1>Umur Kamu Adalah {this.state.umur}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="umur" placeholder="Masukan Umur ANda" className="text" required />
                    <h1>Alamat Tinggal {this.state.alamat}</h1>
                    <textarea name="alamat" className="textarea" placeholder="Masukan Alamat Anda" onChange={this.onChangeHandler}></textarea>
                    <hr />
                    <input type="submit" onClick={this.updateState} value="Simpan Data" className="button" required />
                </form>
            </div>
        );
    }
}

export default Form;