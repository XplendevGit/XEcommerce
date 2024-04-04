"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import Producto from '@/components/interface/Producto'
import { Slider } from '@/components/ui/slider'

const FiltradoProductos = ({ productos }) => {

  const [categoria, setCategoria] = useState('todos')
  const [filteredProductos, setFilteredProductos] = useState([])
  const [valor, setValor] = useState(100000)
  
  useEffect(() => {
    const filtered = productos.filter((producto) => {
      const categoriaMatch = 
      categoria === 'todos'
      ? productos
      : producto.categorias.some((categ) => categ.nombre === categoria)
      const valorMatch = producto.valor <= valor
      return categoriaMatch && valorMatch
    })
    setFilteredProductos(filtered)
  }, [categoria, valor, productos])

  console.log(filteredProductos)

  // Formatea el precio con un punto como separador de miles
  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <>
    <section className="min-h-[1200px] py-10">
    <div className="container mx-auto"> 
    <div className="flex flex-col">
      {/* SideBar */}
      <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
        <RadioGroup 
        defaultValue="todos" 
        className="flex flex-col gap-6 mb-12 font-medium"
        >
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
          value="todos" 
          onClick={() => setCategoria('todos')}
          />
          <label htmlFor='todos'>Todos</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
          value="popular" 
          id="popular"
          onClick={() => setCategoria('popular')}
          />
          <label htmlFor='popular'>Populáres</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
          value="movil" 
          id="movil"
          onClick={() => setCategoria('movil')}
          />
          <label htmlFor='movil'>Móviles</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
           value="laptop" 
           id="laptop"
           onClick={() => setCategoria('laptop')}
           />
          <label htmlFor='laptop'>Laptops</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
          value="musica" 
          id="musica"
          onClick={() => setCategoria('musica')}
          />
          <label htmlFor='musica'>Música</label>
        </div>
        </RadioGroup>
        {/* Precio Slider */}
        <div className="max-w-[320px]">
          <div className="text-lg mb-4 font-medium">
            Precio Hasta:{' '}
            <span className="text-lg font-bold text-accent">${formatPrice(valor)}</span><br />
            <span className="">
              ({filteredProductos.length > 1 
              ? `${filteredProductos.length} productos` 
              : filteredProductos === 0
              ? `${filteredProductos.length} productos`
              : `${filteredProductos.length} producto`})
            </span>
          </div>
          <Slider 
          defaultValue={[100000]} 
          min={10000}
          max={1350000} 
          step={5000} 
          onValueChange={(val) => setValor(val[0])}
          />

        </div>
      </aside>
      {/* Lista de Productos */}
      <div className="w-full xl:w-[1050px] ml-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {filteredProductos.map((producto) => {
          return <Producto producto={producto} key={producto.valor_id}/>
        })}
        </div>
      </div>
     </div>
    </div>
  </section>
  </>
  )
}

export default FiltradoProductos