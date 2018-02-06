/* eslint-disable consistent-return */

import Lane from '../models/lane';
import uuid from 'uuid';

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403)
      .end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];

  newLane.id = uuid();

  newLane.save((err, saved) => {
    if (err) {
      res.status(500)
        .send(err);
    }
    res.json(saved);
  });
}

export function getLanes(req, res) {
  Lane.find()
    .exec((err, lanes) => {
      if (err) {
        res.status(500)
          .send(err);
      }
      res.json({ lanes });
    });
}

export function editName(req, res) {
  if (!req.body.id) {
    res.status(403)
      .end();
  }
  Lane.findOneAndUpdate({ id: req.body.id }, { name: req.body.name }, { new: true })
    .exec((err, updated) => {
      if (err) {
        res.status(500)
          .send(err);
      }
      res.json(updated);
    });
}

export function deleteLane(req, res) {
  Lane.findOne({ id: req.params.laneId })
    .exec((err, lane) => {
      if (err) {
        return res.status(500)
          .send(err);
      }

      lane.remove((laneErr) => {
        if (laneErr) {
          return res.status(500)
            .send(laneErr);
        }
        res.status(200)
          .end();
      });
    });
}

