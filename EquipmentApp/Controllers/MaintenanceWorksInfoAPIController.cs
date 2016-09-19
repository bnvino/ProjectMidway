using System;
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
    public class MaintenanceWorksInfoAPIController : ApiController
    {
        private EquipmentEntities db = new EquipmentEntities();

        // GET api/MaintenanceWorksInfoAPI
        public IQueryable<MaintenanceWork> GetMaintenanceWork()
        {
            return db.MaintenanceWork;
        }

        // GET api/MaintenanceWorksInfoAPI/5
        [ResponseType(typeof(MaintenanceWork))]
        public IHttpActionResult GetMaintenanceWork(int id)
        {
            MaintenanceWork maintenancework = db.MaintenanceWork.Find(id);
            if (maintenancework == null)
            {
                return NotFound();
            }

            return Ok(maintenancework);
        }

        // PUT api/MaintenanceWorksInfoAPI/5
        public IHttpActionResult PutMaintenanceWork(int id, MaintenanceWork maintenancework)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != maintenancework.Id)
            {
                return BadRequest();
            }

            db.Entry(maintenancework).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaintenanceWorkExists(id))
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

        // POST api/MaintenanceWorksInfoAPI
        [ResponseType(typeof(MaintenanceWork))]
        public IHttpActionResult PostMaintenanceWork(MaintenanceWork maintenancework)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MaintenanceWork.Add(maintenancework);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (MaintenanceWorkExists(maintenancework.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = maintenancework.Id }, maintenancework);
        }

        // DELETE api/MaintenanceWorksInfoAPI/5
        [ResponseType(typeof(MaintenanceWork))]
        public IHttpActionResult DeleteMaintenanceWork(int id)
        {
            MaintenanceWork maintenancework = db.MaintenanceWork.Find(id);
            if (maintenancework == null)
            {
                return NotFound();
            }

            db.MaintenanceWork.Remove(maintenancework);
            db.SaveChanges();

            return Ok(maintenancework);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MaintenanceWorkExists(int id)
        {
            return db.MaintenanceWork.Count(e => e.Id == id) > 0;
        }
    }
}