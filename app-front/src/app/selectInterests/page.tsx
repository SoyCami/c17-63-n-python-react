'use client';

import React, { useState, useEffect } from 'react';
import { fetchEventCategories, saveUserInterests } from '@/api/userInterests';
import styles from './page.module.css';

const selectInterests: React.FC = () => {
  const [eventCategories, setEventCategories] = useState<any[]>([]);
  const [interestsSelected, setInterestsSelected] = useState<string[]>([]);

  useEffect(() => {
    fetchEventCategories().then(data => setEventCategories(data));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (interestsSelected.length !== 3) {
      alert('Debes seleccionar 3 intereses');
      return;
    }

    saveUserInterests(interestsSelected)
      .then(success => {
        if (success) {
          alert('Intereses guardados correctamente');
        } else {
          alert('Error al guardar los intereses');
        }
      });
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (event.target.checked) {
      if (interestsSelected.length < 3) {
        setInterestsSelected([...interestsSelected, value]);
      } else {
        event.target.checked = false;
       
      }
    } else {
      setInterestsSelected(interestsSelected.filter(interest => interest !== value));
    }
  };

  return (
    <div>
      <header className="min-h-screen bg-white">
        <div>
          <div className="items-center pl-16 text-center">
            <h1 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A]">
              Empieza escogiendo algnos intereses
            </h1>
            <p  className="py-8 px-3 font-bold text-[#143C3A]">
              Elige 3 categorías de tu interes para que te aparezcan eventos relacionados a tus preferencias, estas son las categorías:
            </p>
          </div>
        </div>
    
        <div id="interests" className="section relative pt-5 md:pt-5 bg-white md:flex space-x-16">
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <form
                id="interestsForm"
                onSubmit={handleSubmit}
                >
                  <div className="flex flex-wrap flex-row -mx-4 text-center">
                    {eventCategories &&
                      eventCategories.map((category) => (
                      <div key={category.id} className="interest flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="py-8 px-12 mb-12">
                          <label htmlFor={`checkbox-${category.id}`} className={`${styles.label} ${interestsSelected.includes(category.id) ? styles.selected : ''}`}>
                            <input
                              type="checkbox"
                              name="interest[]"
                              value={category.id}
                              onChange={handleCheckboxChange}
                              className={`hidden ${styles.checkbox}`}
                              id={`checkbox-${category.id}`} 
                              onClick={() => document.getElementById(`checkbox-${category.id}`)?.click()}
                            />
                            <img
                              src={category.image}
                              alt={category.name}
                              className={`${styles.image}`} 
                            />
                          </label>
                          <label className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">{category.name}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                <button type="submit" className={`${styles.button} px-3 py-2 mb-4 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-white text-black hover:bg-black hover:text-white`} >Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default selectInterests;
