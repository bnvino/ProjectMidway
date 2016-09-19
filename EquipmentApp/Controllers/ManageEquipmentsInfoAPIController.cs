﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EquipmentApp.Models;

namespace EquipmentApp.Controllers
{
    public class ManageEquipmentsInfoAPIController : ApiController
    {
        private EquipmentEntities db = new EquipmentEntities();

        // GET api/ManageEquipmentsInfoAPI
        public IQueryable<Equipment> GetEquipment()
        {
            return db.Equipment;
        }

        // GET api/ManageEquipmentsInfoAPI/5
        [ResponseType(typeof(Equipment))]
        public IHttpActionResult GetEquipment(int id)
        {
            Equipment equipment = db.Equipment.Find(id);
            if (equipment == null)
            {
                return NotFound();
            }

            return Ok(equipment);
        }

        // PUT api/ManageEquipmentsInfoAPI/5
        public IHttpActionResult PutEquipment(int id, Equipment equipment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != equipment.Id)
            {
                return BadRequest();
            }

            db.Entry(equipment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/ManageEquipmentsInfoAPI
        [ResponseType(typeof(Equipment))]
        public IHttpActionResult PostEquipment(Equipment equipment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Equipment.Add(equipment);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EquipmentExists(equipment.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = equipment.Id }, equipment);
        }

        // DELETE api/ManageEquipmentsInfoAPI/5
        [ResponseType(typeof(Equipment))]
        public IHttpActionResult DeleteEquipment(int id)
        {
            Equipment equipment = db.Equipment.Find(id);
            if (equipment == null)
            {
                return NotFound();
            }

            db.Equipment.Remove(equipment);
            db.SaveChanges();

            return Ok(equipment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EquipmentExists(int id)
        {
            return db.Equipment.Count(e => e.Id == id) > 0;
        }
    }
}