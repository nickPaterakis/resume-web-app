import React from 'react';
import { FiHexagon } from 'react-icons/fi';

const AbilitySection = () => (
  <section className="ability-section" id="abilities">
    <h1 className="heading-primary">Abilities</h1>
    <div className="abilities">
      <div className="abilities__container">
        <h1 className="heading-secondary">Skills</h1>
        <ul className="abilities__list">
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            JavaScript
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            react
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            CSS
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            Sass
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            HTML
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            Java
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            Spring Framework
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            Spring Boot
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            Docker
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            Python
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            TensorFlow
          </li>
          <li className="abilities__list-item">
            <span className="abilities__item-order">
              {' '}
              <FiHexagon />
              {' '}
            </span>
            NumPy
          </li>
        </ul>
      </div>

      <div className="abilities__other-abilities">
        <div className="abilities__container">
          <h1 className="heading-secondary">Languages</h1>
          <ul className="abilities__list">
            <li className="abilities__list-item">
              <span className="abilities__item-order">
                {' '}
                <FiHexagon />
                {' '}
              </span>
              Greek
            </li>
            <li className="abilities__list-item">
              <span className="abilities__item-order">
                {' '}
                <FiHexagon />
                {' '}
              </span>
              German
            </li>
            <li className="abilities__list-item">
              <span className="abilities__item-order">
                {' '}
                <FiHexagon />
                {' '}
              </span>
              English
            </li>
          </ul>
        </div>

        <div className="abilities__container">
          <h1 className="heading-secondary">Hobbies</h1>
          <ul className="abilities__list">
            <li className="abilities__list-item">
              <span className="abilities__item-order">
                {' '}
                <FiHexagon />
                {' '}
              </span>
              Football
            </li>
            <li className="abilities__list-item">
              <span className="abilities__item-order">
                {' '}
                <FiHexagon />
                {' '}
              </span>
              Bike
            </li>
            <li className="abilities__list-item">
              <span className="abilities__item-order">
                {' '}
                <FiHexagon />
                {' '}
              </span>
              Hike
            </li>
            <li className="abilities__list-item">
              <span className="abilities__item-order">
                {' '}
                <FiHexagon />
                {' '}
              </span>
              Music
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AbilitySection;
