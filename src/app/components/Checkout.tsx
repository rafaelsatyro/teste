import React from 'react';
import "../globals.css"
import logo from '../../../public/logo.png'
import seta from '../../../public/seta.png'
import item from '../../../public/item.png'

const Checkout: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
      {/* Lado Esquerdo - Sumário do Pedido */}
      <div className="flex-1 flex flex-col justify-between p-8 bg-white">
        <div className='pl-28 pr-28'>
            <div className="flex items-center pt-14 gap-2.5">
                <img src={seta.src} alt="seta" />
                <img src={logo.src} alt="logo" className="w-12 h-12"/>
                <h1 className="text-4xl font-bold ">Cube.</h1>
            </div>
          <div className="flex flex-col flex pt-16 pl-8">
            <p className="text-3xl font-bold text-slate-300 font-light">Cube.</p>
            <p className="text-4xl font-bold pt-2">$549,90</p>
          </div>

          {/* Lista de ofertas */}
          <div className="space-y-2 pt-16">
            <div className="flex items-center pl-20 ">
              <img src={item.src} alt="item" className='pr-2'/>
                <div className='flex flex-col pr-52'> 
                    <p className="text-gray-600">Offer</p>
                    <p className="text-gray-600">Offer Description</p>
                </div>
                <p>RS 19,00</p>
            </div>
          </div>

          <div className="space-y-2 pt-16">
            <div className="flex items-center pl-20 ">
              <img src={item.src} alt="item" className='pr-2'/>
                <div className='flex flex-col pr-52'> 
                    <p className="text-gray-600">Offer</p>
                    <p className="text-gray-600">Offer Description</p>
                </div>
                <p>RS 19,00</p>
            </div>
          </div>

          <div className='flex justify-between pr-32 pl-20 pt-14 '>
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-600">R$ 38,00</p>
          </div>
          <div className='pr-32 pl-20 pt-4' >
             <hr />
          </div>

          <div className='flex justify-between pr-32 pl-20 pt-14 '>
                <p className="text-gray-600">Sales tax(6.5%)</p>
                <p className="text-gray-600">R$ 38,00</p>
          </div>
          <div className='pr-32 pl-20 pt-4' >
             <hr />
          </div>

          <div className='flex justify-between pr-32 pl-20 pt-10 '>
                <p className="text-2xl font-bold">Total</p>
                <p className="text-2xl font-bold">R$ 38,00</p>
          </div>
        </div>
    </div>
    
    
      {/* Lado Direito - Detalhes do Pagamento */}
      <div className="flex-1 bg-gray-50 p-8">
        <div className="flex flex-col pt-14">
          <button className="mb-6 w-full bg-black text-white py-3 px-4 rounded-xl">
            Pix
          </button>
          <div className="border-t pt-6">
            <p className="text-lg  mb-4 text-gray-600">Contact information</p>
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="email@example.com" />
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="(00) 0 0000-0000" />
            <p className="text-lg  mb-4 text-gray-600">Card information</p>
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="1234 1234 1234 1234" />
            <div className="flex space-x-2">
              <input className="form-input mb-4 p-2 border flex-1 rounded-xl" placeholder="MM / YY" />
              <input className="form-input mb-4 p-2 border flex-1 rounded-xl" placeholder="CVC" />
            </div>
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="Name on card" />
            <select className="form-select mb-6 p-2 border w-full rounded-xl">
              <option className='text-gray-600'>Installment</option>
              {/* Opções de parcelamento */}
            </select>
            <button className="w-full bg-black text-white py-3 px-4 rounded-xl">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
